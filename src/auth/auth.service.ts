import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { User, UserDocument } from '../user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    const user = await this.userModel.create({
      email: dto.email,
      password: hash,
    });
    return user;
  }

  async signin(dto: AuthDto) {
    const user = await this.userModel.findOne({ email: dto.email });
    if (!user) {
      throw new ForbiddenException('Email not found');
    }

    const pwMatch = await argon.verify(user.password, dto.password);
    if (!pwMatch) {
      throw new ForbiddenException('Credentials incorrect');
    }

    return this.signToken(user._id, user.email);
  }

  async signToken(userId: string, email: string): Promise<any> {
    const payload = {
      userId,
      email,
    };
    const secret = this.config.get<string>('JWT_SECRET');
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
      secret,
    });

    return {
      access_token: token,
    };
  }
}
