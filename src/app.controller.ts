import { Controller, Get, Req, UseGuards, Post } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard())
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
