import Image from "next/image";

const Component = () => {
    return (
        <div style={{
            width: '100%'
        }}>
            <Image src="https://www.piemultilingual.com/wp-content/uploads/2021/11/cover.jpg?123" style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
                }} alt="Piemultilingual" width="1170" height='516' />
        </div>
    );
}

export default Component;