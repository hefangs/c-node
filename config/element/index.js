import {
  Button,
  Select,
  Form,
  FormItem,
  Loading,
  Message,
  Pagination
} from 'element-ui';

const element = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Select);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Pagination);
    Vue.prototype.$message = Message;
    Vue.prototype.$loading = Loading.service;
  }
};
export default element;

