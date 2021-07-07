import app from './infrastructure/server/server';
import { asClass, InjectionMode, createContainer, asValue } from 'awilix';
import UserRepository from './infrastructure/repositories/User/UserRepository';
import { CreateUser } from './application/use_cases/User/';
import UserController from './interfaces/controller/User/UserController';
import { user } from './infrastructure/orm/sequelize/models';
import express from 'express';

const container = createContainer({
  injectionMode: InjectionMode.PROXY
});

container.register({
  userController: asClass(UserController).singleton(),
  userRepository: asClass(UserRepository).scoped(),
  createUser: asClass(CreateUser).scoped(),
})

container.register({
  UserModel: asValue(user),
});

const userController: any = container.resolve('userController');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use('/users', userController.router());


app.listen(3000, () => {
  console.log(`Application is running now!`)
})
