export function Light(){
    return (
        <>
            <ambientLight />
            <directionalLight
                position={[5, 10, 15]}
                castShadow
                shadow-camera-left={-10}
                shadow-camera-right={10}
            />
        </>
    );
}

