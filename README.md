# kitchen-stories

> 厨房故事

## 安装git

Windows下面下载安装。
Mac用户可以看下网络教程。

## 生成ssh-key

1：执行命令 ssh-keygen -t rsa 然后一直回车

2：cat ~/.ssh/id_rsa.pub 复制公钥

3：进入个人设置-》ssh公钥 添加公钥

## clone代码

clone代码

``` git

```
## 安装node

首先你需要安装node,版本 5.0以上。安装办法Google一下吧。
node 在Windows下面 可能需要配置一下变量环境。

接下来 打开`terminal` 或者`git bash` npm 就可以用了


## Build Setup

``` bash
# install dependencies(安装以来)
npm install

# serve with hot reload at localhost:8080(开发环境)
npm run dev

# build for production with minification(生产打包)
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## tag 格式

``` git
git tag v时间(精确到分)_业务名
```

## 项目结构说明

### 文件名命名：

	文件(文件夹)名单词间隔用“-”隔开，不要采用大小写（因为windows路径不识别大小写）

	例如：item-scroll.jsx、inner-top.vue、class-list/

### 文件目录说明：

- build 构建层
	dev 开发环境, 
		支持本地跨域代理接口, 热重载, 支持es6语法, 整合static目录
		vue文件解析, 并支持jsx 进行 render
		使用less|postcss 对css预处理, 通过postcss-px2rem 自动将px转为rem, 引入flexiable.js 更改dpr兼容不同机型

	prod 生产环境, 自动打包构建成静态文件

- common 公共模块

	components/ 基础组件存放位置，*说明：基础组件一定不要携带任何业务及上下文，比如在button中写死了某个文案，就是携带业务

	modules/ 基础模块存放位置，*说明：与基础组件一致，有多个基础组件组成

	utils/ 工具层
		common: 通用工具方法
		cookie: 
		flexible: h5适配
		log: 统计
		observer: 自定义事件
		user: 用户信息

	service/ 后端接口服务层

	weixin/ 微信api初始化

	bridge/ 客户端通信桥接层

	adapter/ 适配层

	element/ 饿了么ui组件
	
	less/ 样式
		base.less: 基础
		common.less: 工具
		variable.less: 变量
		animate.less: 动画

	entry/ vue功能页面的公共入口, 一切从entry开始, 包括实例化Vue对象, 初始化微信, 初始化客户端按钮, 初始化service, 初始化用户信息等等操作

	entry-mini/ 不依赖vue的轻量不入口

- mock层, 模拟数据

- assets/ 静态文件存放目录

	images 图片(注意跟pages文件目录对应)

	static 静态文件

- pages/ 页面存放目录, 主要针对业务层逻辑，

	*1. 说明：每个大的页面尽量拆分子模块，子模块存放到自己页面的文件夹下，例如：pages/index/top.vue、pages/index/body.vue、pages/index/.vue

	*2. 目前单个vue文件支持 style, 但是vue-style-loader 和postcss-px2rem插件, 会把字体等不需要打包为rem的属性重新编译为rem, 影响我们字体不变异rem的目的
		使用方式 vue文件同级新建一个 .less文件, script标签里引入
		缺点: 不支持style scoped
		弥补方式: 组件css命名方式采用按照下面命名空间的逻辑

	store/ vuex相关, 具体规范请参考目录: src/pages/demo/store

	router/ vue-router相关, 具体规范请参考目录: src/pages/demo/store
		
	views.js 所有entry页面的配置

- .eslintrc.js, 在本地服务构建之前,进行预解析并进行代码检查, 规范代码书写, 参考[代码规范](http://eslint.org/docs/rules/)

- .postcssrc.js, postcss 相关组件


### 代码示例：

##### 基础组件示例
``` javascript
/**
 * 注意:
 * 自定义事件 一定要在顶部申明, 加上详细注释, 包括事件类型, 传递参数, 参数类型, 参数状态等
 */
const events = {
  CLICK: 'click'
}

/**
 * 注意:
 * 自定义组件 一定要在顶部申明, 加上详细注释, 包括事件类型, 传递参数, 参数类型, 参数状态等
 * 
 * button组件
 * @module components/button
 * @desc 按钮
 * @param {String} [type=default] - 显示类型, 接收 default, primary, danger
 * @param {Boolean} [disbale=false] - 禁用
 * @param {String} [size=large] - 尺寸, 接收 normal, small, large
 * 
 * @example
 * <button @click="clickHandle" size="large" type="primary">按钮</button>
 */
const props = {
	disable: Boolean,
	size: {
		type: String,
		default: 'normal'
	},
	type: {
		type: String,
		default: 'default'
	}
}
```

##### 组件页面示例

``` javascript
/**
 * 注意:
 * 基础组件css命名空间为 c-
 * 
 * 外层容器样式命名 c-文件名
 * 子元素样式命名 c-文件名-样式名
 * 条件样式命名 c-文件名--样式名
 */

<a
	class="c-button"
	:class="[
		`c-button--${type}`,
		`c-button--${size}`,
		{
			'c-button-disabled': disabled,
			'c-button-plain': plain
		}
	]"
>
	<text 
		class="c-button-text"
		:class="[`c-button-${type}-text`]"
	>
		<slot></slot>
	</text>
</a>
```

##### 业务逻辑页面

``` javascript
/**
 * 注意:
 * 
 * 子组件引用和其他引用换行
 * 基础组件用c+文件名命名
 * 基础模块用m+文件名命名
 * 页面子模块用p+文件名命名
 * 如果没有用vuex或者redux 页面状态统一入口在父组件, 并加上注释
 */
import cWrap from 'components/wrap'
import mContainer from 'modules/container'
import pNotice from './notice'

export default {
	components: {
		cWrap, mContainer, pNotice
	},

	data () {
		return {
			// 用户信息
			user: {},

			// 获取本周以上数据
			weekScore: {},

			// 广播显示文案
			broadcastText: {}
		}
	}
}
```

具体页面代码示例：

### 方法名定义

	所有绑定事件类的方法统一前缀 on 例如：onOpen、onMessage
	所有后端拉取数据的方法统一前缀 get 例如：getList、getStudentDetail、保存统一前缀save、更新统一前缀update、删除统一前缀delete
	所有内部私有方法统一前缀 _ 例如：_compareTime、_isStudent

