const API_HOST_LOCAL = "http://localhost:8080";

const ENV_LOCAL = "local";

const HOSTS = {
    local: {
        "API": API_HOST_LOCAL,
    },
}

export const serviceUrl = () => {

    const environment = ENV_LOCAL;
    return HOSTS[environment].API
};

export const urls = {
    service: serviceUrl()
};