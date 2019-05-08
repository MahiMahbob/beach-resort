import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free cocktails',
                info: 'Lorem ipsum masuk de ppan fi to mi tarew, Magni !coprois'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem ipsum masuk de ppan fi to mi tarew, Magni !coprois'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Lorem ipsum masuk de ppan fi to mi tarew, Magni !coprois'
            },
            {
                icon: <FaBeer />,
                title: 'Your Beer',
                info: 'Lorem ipsum masuk de ppan fi to mi tarew, Magni !coprois'
            }
        ]
    }
  render() {
    return (
      <section className='services'>
        <Title title='Services' />
        <div className='services-center'>
            {this.state.services.map((item, index) => {
                return (
                    <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
        </div>
      </section>
    )
  }
}
