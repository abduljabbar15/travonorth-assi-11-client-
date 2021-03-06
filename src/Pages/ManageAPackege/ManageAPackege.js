import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";
import './manageAPackege.css'

const ManageAPackege = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://travnorth.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then((data) => {
                setUser(data)
            })
    }, [id])
    const chngData = e => {
        const updatedValue = e.target.value;
        const updatedName = e.target.name;
        const cUser = { ...user };
        cUser[updatedName] = updatedValue
        setUser(cUser)
    }
    const onSubmition = (e) => {
        const data = {
            title: user.title,
            img: user.img,
            discription: user.discription,
            hotelP: user.hotelP,
            ticket: user.ticket,
            date: user.date,
            edit: true,
        }
        fetch(`https://travnorth.herokuapp.com/places/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => alert('update complete'))
        e.preventDefault()
    };
    return (
        <div >
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <img style={{ minWidth: '2%', margin: '0 auto', }} className='rounded-full' src={user.img} alt="" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Modify your Package</h2>

                    <form onSubmit={onSubmition} className="mt-8 space-y-6" >
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="title" className="sr-only">
                                    Title
                                </label>
                                <input
                                    name="title"
                                    value={user.title || ''}
                                    type={'text'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Package Title"
                                    id="title"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="img" className="sr-only">
                                    Image URL
                                </label>
                                <input
                                    name="img"
                                    value={user.img || ''}
                                    type={'text'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Image URL"
                                    id="img"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="hotelP" className="sr-only">
                                    Hotel Price
                                </label>
                                <input
                                    name="hotelP"
                                    type={'number'}
                                    value={user.hotelP || ''}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Hotel Price"
                                    id="hotelP"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="ticket" className="sr-only">
                                    Ticket Price
                                </label>
                                <input
                                    name="ticket"
                                    value={user.ticket || ''}
                                    type={'number'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Ticket Price"
                                    id="ticket"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="discription" className="sr-only">
                                    Package Discription
                                </label>
                                <input
                                    name="discription"
                                    type={'text'}
                                    value={user.discription || ''}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Package discription"
                                    id="discription"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="date" className="sr-only">
                                    Participant Date
                                </label>
                                <input
                                    name="date"
                                    type={'date'}
                                    value={user.date || ''}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Participant Date"
                                    id="date"
                                    onChange={chngData}
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                className="mt-1 group relative w-full items-center flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            ><GrUpdate style={{ marginRight: '10px' }} />  Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageAPackege;