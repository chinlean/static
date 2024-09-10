function FindProxyForURL(url, host) {
    if(shExpMatch(host, "*ncl.lan")) {
        return "PROXY 10.76.26.144:80";
    }
    else if(host == "cm.lan" || shExpMatch(host, "*cm.lan")) {
        return "PROXY 10.80.80.66:8080";
    }
    return "DIRECT"
}
