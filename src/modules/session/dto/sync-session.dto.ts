import { IsOptional, IsBoolean, IsNumber, IsArray } from 'class-validator';

export class SyncSessionDto {
  @IsOptional()
  @IsNumber()
  limitPerChat?: number;

  @IsOptional()
  @IsNumber()
  concurrency?: number;

  @IsOptional()
  @IsBoolean()
  downloadMedia?: boolean;

  @IsOptional()
  @IsNumber()
  maxMediaSizeKB?: number;

  @IsOptional()
  @IsArray()
  allowedMimePrefixes?: string[];

  @IsOptional()
  @IsNumber()
  downloadTimeoutMs?: number;

  @IsOptional()
  @IsNumber()
  delayBetweenChatsMs?: number;
}
