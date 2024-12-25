import React, { useState } from 'react'

interface data {
    name: string
    address: string
    emailId: string
}

const Write = () => {

    const fileName = 'coinData.json';

    const [coindata, setFormData] = useState({ name: '', address: '', emailId: '' })
    const [collection, setCollection] = useState<data[]>([])
    const onChange = (event: { target: { name: string; value: string; }; }) => {
        setFormData({ ...coindata, [event.target.name]: event.target.value });
    };
    const onClick = () => {
        setCollection([...collection, { ...coindata }])
    }
    const downloadableData = encodeURIComponent(JSON.stringify(collection, null, 2))
    return <React.Fragment>
        <form>
            <input type="text" name="name" onChange={onChange} value={coindata.name || ''} />
            <input type="text" name="address" onChange={onChange} value={coindata.address || ''} />
            <input type="text" name="emailId" onChange={onChange} value={coindata.emailId || ''} />
        </form>
        <a href={`data:application/json,${downloadableData}`} download={fileName} onClick={onClick} >Download Form Data</a>
    </React.Fragment>
}

export default Write