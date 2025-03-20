"use client"
import { useEffect } from "react";

const TawkToConfig = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            var Tawk_API: any = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/67b07181ff63fc1906489785/1ik4jmolr';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                if (s0.parentNode) {
                    s0.parentNode.insertBefore(s1, s0);
                }
            })()
        }
    }, []);

    return <></>; // No visible UI elements needed
};

export default TawkToConfig;
