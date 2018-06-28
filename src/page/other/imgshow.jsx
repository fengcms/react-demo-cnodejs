import React, { Component } from 'react'
import Path from '@/tool/path'
export default class ImgShow extends Component {
  render () {
    return (
      <div>
        <p>下面是插入的图片</p>
        <img src={Path('react.jpg')} alt='react' />
        <p>下面是在 scss 中使用的背景图片</p>
        <div className='use_bg_img'></div>
      </div>
    )
  }
}
