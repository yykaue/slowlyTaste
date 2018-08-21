// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

/**
 * root：
 * 设置是否在父级目录寻找( true 不允许， false 允许 )
 */

/**
 * parserOptions:
 * 配置所支持的语法
 */

/**
 * env：
 * 配置启用环境，
 * 要启用的环境写在这里，
 * 并设置为 true
 */

/**
 * extends：
 * 继承已启用的规则配置
 */

/**
 * plugins：
 * 第三方插件配置，
 * 使用前要 npm 安装它。
 */

/**
 * rules：
 * 在 extends 里指定了设定好要启用的规则，
 * 但是很多时候有部分不一样，
 * 在这里可以设置让 extends 里部分规则不启用
 */

/**
 * globals：
 * 很多默认开启规则的 config 都不允许使用全局变量，
 * 它们被认为是未定义的变量，
 * 由 no-undef 规则来发出警告。
 * 所以如果要使用全局变量的话，
 * 推荐做法是在配置文件里的 globals 里声明它(等于 true 允许变量被重写，false 不允许变量被重写)
 */

/**
 * parser：
 * 指定解释器，
 * 默认使用Espree作为其解析器
 *
 * 要求：
 * 它必须是本地安装的一个 npm 模块。
 * 它必须有兼容 Esprima 的接口（它必须输出一个 parse() 方法）
 * 它必须产出兼容 Esprima 的 AST 和 token 对象。
 */

/**
 * settings：
 * 配置文件添加共享设置。
 * 它将提供给每一个将被执行的规则。
 * 添加的自定义规则而且使它们可以访问到相同的信息
 */

 /**
  * 可以通过在项目根目录创建一个 .eslintignore 文件告诉 ESLint 去忽略特定的文件和目录。
  * .eslintignore 文件是一个纯文本文件，
  * 其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测。
  * 例如: /config/
  */
