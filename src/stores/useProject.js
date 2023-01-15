import create from 'zustand'

export default create((set) =>
{
    return {
        frontProjectName: null,

        setFrontProject: (project) =>
        {
            set(() =>
            {
                return { frontProjectName: project }
            })
        }
    }
})