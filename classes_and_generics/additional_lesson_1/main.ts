import { UserApi } from './api/UserApi';

const api = new UserApi('dev', 1);

api.getUser(1)