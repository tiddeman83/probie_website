import ReactPlayer from 'react-player'

const ResponsivePlayer = () => {
    
        return (
            <div className = "ResponsivePlayer">
                <ReactPlayer
                className = 'react-player'
                url = 'https://www.youtube.com/watch?v=g4uA-aJNYJg'
                width = '50%'
                height = '50%' 
                />
            </div>

        )
    
}

export default ResponsivePlayer;