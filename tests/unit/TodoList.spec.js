import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";
describe("TodoList.vue", () => {
  // it("", (done) => {
  //   const wrapper = mount(TodoList);
  //   wrapper
  //     .get("#todoinput")
  //     .setValue("some value")
  //     .then(() => {
  //       expect(wrapper.text()).toContain("some value");
  //       done();
  //     });
  // });
    it("input render in html", async () => {
      const wrapper = mount(TodoList);
      const textInput = wrapper.find('#todoinput')
    await textInput.setValue('some value')

    expect(wrapper.html()).toContain('some value')
    });
    it("validate addItemfunction ", async () => {
      // given : input 中输入一定的数
      const wrapper = mount(TodoList)
      await wrapper.find('#todoinput').setValue('todo1')  
      // when: 当按键enter 被按下
      await wrapper.trigger('keyup.enter')
      // then : 新的组件被渲染到view上
      console.log(wrapper.find('ul').html());
      expect(wrapper.find('ul').html()).toContain('todo1')
      
    })
});
