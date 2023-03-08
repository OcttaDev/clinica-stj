import  {  GoogleMap ,  Marker,  useJsApiLoader  }  from  '@react-google-maps/api' 
import "../Map.css"


function LocationSume(){
    const  { isLoaded }  =  useJsApiLoader ( { 
        id : 'google-map-script' , 
        googleMapsApiKey : "AIzaSyASTJUHDxkR37wTwAVGMUffb2is6xqOmo4" 

        //AIzaSyDQ2yt_Lq5nNFDRswtuoxjuPpnVvRMkn0A api
      } )

      const position = {
        lat: -7.671449954894381, 
        lng:  -36.87825760881007,
      }
    return(
        <div className='sume'>
           {
            isLoaded ? ( 
                < GoogleMap 
                  mapContainerStyle = {{width: "100%", height: "100%"}} 
                  center = {position} 
                  zoom = { 15 }
                > 
                <Marker position={position}/>
                  <> </> 
                </GoogleMap> 
            ) : (
             <> </> 
           )}
        </div>
    )
}
export default LocationSume