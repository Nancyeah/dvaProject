
export default {

  namespace: 'example',          // 命名空间，作为connect方法中获取model对象state的id

  state: {},                     // 初始化state

  subscriptions: {               // 订阅
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {                     // 异步action的handler
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {                    // react-redux的reducer，用来接收action并且处理数据更新
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
