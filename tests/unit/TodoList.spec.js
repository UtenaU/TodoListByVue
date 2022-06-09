import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";
describe("TodoList.vue", () => {
  it("", (done) => {
    const wrapper = mount(TodoList);
    wrapper
      .get("#todoinput")
      .setValue("some value")
      .then(() => {
        expect(wrapper.text()).toContain("some value");
        done();
      });
  });
  //   it("input render in html", async () => {
  //     const wrapper = mount(TodoList);
  //     const textInput = wrapper.find('#todoinput')
  //   await textInput.setValue('some value')

  //   expect(wrapper.html()).toContain('some value')
  //   });
});
