import create from 'zustand'

export default create((set) =>
{
    return {
        frontProjectName: null,

        setFrontProjectName: (project) =>
        {
            set(() =>
            {
                return { frontProjectName: project }
            })
        }
    }
})