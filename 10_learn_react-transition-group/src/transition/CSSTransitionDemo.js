import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.setState({
              isShow: !this.state.isShow
            });
          }}
        >
          显示/隐藏
        </button>
        {/* 
        有三种状态 appear enter exit
        card-enter card-enter-active  card-enter.done
        timeout为类添加时间
        unmountOnExit隐藏后不占位
        appear第一次加载时有动画
        */}
        <CSSTransition in={this.state.isShow}  classNames='card'
        timeout={300}
        unmountOnExit={true}
        appear
        onEnter={el=>{
          console.log("进入状态");
        }}
        onEntering={el=>{
          console.log("正在");
        }}
        onExited={el=>{
          console.log("完成");
        }}

        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}
