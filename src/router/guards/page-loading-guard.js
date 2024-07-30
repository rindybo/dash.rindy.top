/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/05 21:24:53
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Rindy | rindy.top
 **********************************/

export function createPageLoadingGuard(router) {
  router.beforeEach(() => {
    $loadingBar.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      $loadingBar.finish()
    }, 200)
  })

  router.onError(() => {
    $loadingBar.error()
  })
}
