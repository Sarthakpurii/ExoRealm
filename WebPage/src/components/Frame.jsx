import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
function Frame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/WebGL_Build.loader.js",
    dataUrl: "build/webgl.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

  return (
    <div id='model' className='h-screen w-full'>
      <Unity style={{ width: '100%', height: "100%" }} unityProvider={unityProvider} />
    </div>
  )
}

export default Frame