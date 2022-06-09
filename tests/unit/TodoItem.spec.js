import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem";

describe('TodoItem.vue',() => {
    it('test props render',  () => {
        const id = new Date().getTime()
        const content = 'some value'
        const state = 'activate'
        
        const wrapper = shallowMount(TodoItem,{
            props:{
                id: id,
                content: content,
                state: state
            }
        })
        expect(wrapper.text()).toContain(content)
    })

    it('test remove emits', () => {

        // const id = new Date().getTime()
        const id = 12345678
        const content = 'some value'
        const state = 'activate'
        
        const wrapper = shallowMount(TodoItem,{
            props:{
                id: id,
                content: content,
                state: state
            }
        })

        wrapper.find('#removeBtn').trigger('click')

        const removeEvent = wrapper.emitted('removeOne')
        // console.log(removeEvent);
        
        expect(wrapper.emitted()).toHaveProperty('removeOne')

        expect(removeEvent[0]).toContain(id)

    })
    it('test complete emits and css change', async () => {

        // const id = new Date().getTime()
        const id = 12345678
        const content = 'some value'
        const state = 'activate'
        
        const wrapper = shallowMount(TodoItem,{
            props:{
                id: id,
                content: content,
                state: state
            }
        })

        await 
        wrapper.find('#completeBtn').trigger('click')

        console.log(wrapper.classes());
        expect(wrapper.emitted()).toHaveProperty('completeOne')
        expect(wrapper.get('#todocontent').classes()).toContain('completed')
        // expect(wrapper.classes()).toContain('completed')

    })

})