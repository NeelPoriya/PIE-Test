import rootStyles from './../app/page.module.css'
import Card from './Card'

const Component = () => {
    return (
        <div className={rootStyles.container}>
            <h2 style={{marginBottom: '10px'}}>Our Features</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)'
            }}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => <Card key={i} />)}
            </div>
        </div>
    )
}

export default Component;