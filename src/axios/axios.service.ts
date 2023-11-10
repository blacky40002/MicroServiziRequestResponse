import { HttpException, Injectable } from '@nestjs/common';
import { CreateAxioDto } from './dto/create-axio.dto';
import { UpdateAxioDto } from './dto/update-axio.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map, catchError } from 'rxjs';

@Injectable()
export class AxiosService {
  constructor(private readonly httpService: HttpService) {}

  async create(
    createAxioDto: CreateAxioDto,
  ): Promise<Observable<AxiosResponse<CreateAxioDto>>> {
    return await this.httpService
      .post(
        `http://79.32.228.121/northwindWebApi/api/prodottientities`,
        createAxioDto,
      )
      .pipe(
        map((resp) => resp.data),
        catchError((err) => {
          throw new HttpException(err.response.data, err.response.status);
        }),
      );
  }

  async findAll(): Promise<Observable<AxiosResponse<CreateAxioDto[]>>> {
    return this.httpService
      .get(`http://79.32.228.121/northwindWebApi/api/prodottientities`)
      .pipe(
        map((resp) => resp.data),
        catchError((err) => {
          throw new HttpException(err.response.data, err.response.status);
        }),
      );
  }
  findOne(id: number) {
    return `This action returns a #${id} axio`;
  }

  update(id: number, updateAxioDto: UpdateAxioDto) {
    return `This action updates a #${id} axio`;
  }

  remove(id: number) {
    return `This action removes a #${id} axio`;
  }
}
