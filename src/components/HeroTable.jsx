import React from 'react';
import Hero from './Hero';

class HeroTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCharacters: props.arreglo.map(item => {
                return { ...item, useRing: false, useKill: false }
            })
        }
    }

    handlerClickRing = name => {
        const filterArray = this.state.arrayCharacters.map(item => {
            return { ...item, useRing: true ,useKill: false}
        });
        const newArray = filterArray.filter(item => {
            return item.name !== name
        });
        this.setState({
            arrayCharacters: newArray
        })
    };

    handlderClickKill = indice => {

        const currentItem = this.state.arrayCharacters[indice];
        currentItem.useKill = true;
        const arrayNuevo = this.state.arrayCharacters.filter((item, idx) => idx !== indice)
            .concat(currentItem);
        this.setState({
            arrayCharacters: arrayNuevo
        });

        console.log('entre kill:' + indice);
    }

    render() {
        return (
            <table className={'characters-table'} style={{ 'line-through': '' }}>
                <thead>
                    <tr className={'character-row'}>
                        <th>Name</th>
                        <th>Race</th>
                        <th>Age</th>
                        <th>Weapon</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.arrayCharacters.map((objeto, indice) => {
                            return <Hero onClickKill={this.handlderClickKill} onClickRing={this.handlerClickRing} key={indice} objeto={objeto} indice={indice} />;
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default HeroTable