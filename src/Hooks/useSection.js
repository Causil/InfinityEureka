import {useState} from 'react'
export const useSection = () => {
    const [regular,setRegular] = useState('introduction')
    return ({
        regular,
        setRegular
    })
};