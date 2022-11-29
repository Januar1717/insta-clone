import React from 'react'
import { BiCreditCard } from 'react-icons/bi'

const Content = () => {
    return (
            <div className='content px-64 bg-gray-200 border flex flex-col h-screen overflow-y-scroll pt-6'>
                <div className='space-y-6'>
                    <Card
                        bgColor={`bg-green-600`}
                        txtColor={"text-green-600"}
                        icon={<BiCreditCard size={25} />}
                        label=
                        {<span className='text-sm'>
                            Transfer via
                            Card Number
                        </span>}
                    />
                    <Card
                        bgColor={`bg-green-600`}
                        txtColor={"text-green-600"}
                        icon={<BiCreditCard size={25} />}
                        label=
                        {<span className='text-sm'>
                            Transfer via
                            Card Number
                        </span>}
                    />
                    <Card
                        bgColor={`bg-green-600`}
                        txtColor={"text-green-600"}
                        icon={<BiCreditCard size={25} />}
                        label=
                        {<span className='text-sm'>
                            Transfer via
                            Card Number
                        </span>}
                    />
                </div>
            </div>
    )
}

function Card(props) {
    return (
        <div className={`rounded-lg ${props.bgColor} bg-opacity-10 p-5 leb h-screen ${props.txtColor}`}>
            <div>{props.icon}</div>
            <div>{props.label}</div>
        </div>
    )
}

export default Content