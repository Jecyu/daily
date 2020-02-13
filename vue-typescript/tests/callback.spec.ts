import mylib  from '../src/utils/callback';
describe('异步代码 callback 测试', () => {
  it('should get "Hello DIST"', (done: Function) => {
    mylib('DIST', (result: string) => {
      expect(result).toBe('Hello DIST');
      done(); // 通知测试结束
    })
  });
})