//api_key: AIzaSyASTJUHDxkR37wTwAVGMUffb2is6xqOmo4
//api_key: AIzaSyACTFjJR4UAyMNm33KGD4InnIUGtOXnCiY
import  {  GoogleMap ,  Marker,  useJsApiLoader  }  from  '@react-google-maps/api' ;
import "../Map.css"

function LocationSb(){
    const  { isLoaded }  =  useJsApiLoader ( { 
        id : 'google-map-script' , 
        googleMapsApiKey : "AIzaSyASTJUHDxkR37wTwAVGMUffb2is6xqOmo4" 
      } )
    
    const position = {
       lat: -7.484156267489688,
       lng:  -36.66215483220454,
    }
    return(
        <div className='sb'>
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
export default LocationSb