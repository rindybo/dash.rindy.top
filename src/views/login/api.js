/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/05 21:28:30
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Rindy | rindy.top
 **********************************/

import { request } from '@/utils'

export default {
  toggleRole: data => request.post('/auth/role/toggle', data),
  login: data => request.post('/auth/login', data, { needToken: false }),
  getUser: () => request.get('/user/detail'),
}
