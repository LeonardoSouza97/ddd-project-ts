import app from './infrastructure/server/server';
import { asClass, InjectionMode, createContainer, asValue } from 'awilix';
import UserRepository from './infrastructure/repositories/User/UserRepository';
import { CreateUser, MergeUser, DeleteUser, GetUserByEmail, GetUserById } from './application/use_cases/User/';
import UserController from './interfaces/controller/User/UserController';
import { user } from './infrastructure/orm/sequelize/models';
import express from 'express';

const container = createContainer({
  injectionMode: InjectionMode.PROXY
});

//cases
container.register({
  createUser: asClass(CreateUser).singleton(),
  mergeUser: asClass(MergeUser).singleton(),
  deleteUser: asClass(DeleteUser).singleton(),
  getUserById: asClass(GetUserById).singleton(),
  getUserByEmail: asClass(GetUserByEmail).singleton(),
});

//repositories
container.register({
  userRepository: asClass(UserRepository).scoped(),
});

//controllers
container.register({
  userController: asClass(UserController).scoped(),
});

//database
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
