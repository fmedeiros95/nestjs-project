import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiBearerAuth()
@ApiTags('Empresas')
@Controller('companies')
export class CompaniesController {
	constructor(
		private readonly companiesService: CompaniesService
	) {/** */}

	@Post()
	@ApiOperation({ summary: 'Create company' })
	create(@Body() createCompanyDto: CreateCompanyDto) {
		return this.companiesService.create(createCompanyDto);
	}

	@Get()
	@ApiOperation({ summary: 'Get all companies' })
	findAll() {
		return this.companiesService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get company by id' })
	findOne(@Param('id') id: string) {
		return this.companiesService.findOne(+id);
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update company by id' })
	update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
		return this.companiesService.update(+id, updateCompanyDto);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete company by id' })
	remove(@Param('id') id: string) {
		return this.companiesService.remove(+id);
	}
}
