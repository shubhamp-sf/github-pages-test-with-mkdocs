import {Getter, inject} from '@loopback/core';
import {HasOneRepositoryFactory, repository} from '@loopback/repository';
import {SequelizeCrudRepository} from '../../../sequelize';
import {DbDataSource} from '../datasources/db.datasource';
import {TodoList, User, UserRelations} from '../models/index';
import {TodoListRepository} from './todo-list.repository';

export class UserRepository extends SequelizeCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  public readonly todoList: HasOneRepositoryFactory<
    TodoList,
    typeof User.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('TodoListRepository')
    protected todoListRepositoryGetter: Getter<TodoListRepository>,
  ) {
    super(User, dataSource);
    this.todoList = this.createHasOneRepositoryFactoryFor(
      'todoList',
      todoListRepositoryGetter,
    );
    this.registerInclusionResolver('todoList', this.todoList.inclusionResolver);
  }
}
