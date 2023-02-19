import create from 'zustand'

export default create((set) =>
{
    return {
        frontProject: null,

        setFrontProject: (project) =>
        {
            set(() =>
            {
                return { frontProject: project }
            })
        }
    }
})