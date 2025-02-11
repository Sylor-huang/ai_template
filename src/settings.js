const current_date = new Date

const setting = {
  title: 'ELonAi',
  theme: "light",
  copyright: current_date.getFullYear() + '© ELonAi',     //copyright
  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,
  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,
  /**
   * @type {boolean} true | false
   * @description Whether show the title in Navbar
   */
  showTitle: false,
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showLeftMenu: true,
  /**
   * @type {boolean} true | false
   * @description Whether show the drop-down
   */
  ShowDropDown: true,
  /**
   * @type {boolean} true | false
   * @description Whether show Hamburger
   */
  showHamburger: true,
  /**
   * @type {boolean} true | false
   * @description Whether need login
   */
  isNeedLogin: false,
  /**
   * @type {boolean} true | false
   * @description Whether need nprogress
   */
  isNeedNprogress: true,
  /**
   * @type {boolean} true | false
   * @description Whether show TagsView
   */
  showTagsView: false,
  /**
   * @description TagsView show number
   */
  tagsViewNum: 6,
  //showSettings: true
  /**
   * @type {boolean} true | false
   * @description Whether  open prod mock
   */
  openProdMock: true,
  /**
   * @type {string | array} 'serve' | ['build', 'serve']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['build', 'serve']
   */
  errorLog: ['build'],
  /**
   * @type {string} 'roles' | 'code'
   */
  permissionMode: 'roles'
}

export default setting
