/*eslint-disable quote-props*/
console.log("addr", process.env.HUB_PORT_4444_TCP_ADDR);

module.exports = {
    "custom_assertions_path": "",
    "custom_commands_path": "",
    "globals_path": "",
    "output_folder": "reports",
    "page_objects_path": "",
    "src_folders": ["tests"],
    "live_output": true,

    "selenium": {
        "start_process": false,
        "host": process.env.HUB_PORT_4444_TCP_ADDR,
        "port": process.env.HUB_PORT_4444_TCP_PORT,
    },

    "test_settings": {
        "default": {
            "launch_url": `http:${process.env.HUB_PORT_4444_TCP_ADDR}`,
            "selenium_port": process.env.HUB_PORT_4444_TCP_PORT,
            "selenium_host": process.env.HUB_PORT_4444_TCP_ADDR,
            "silent": true,
            "screenshots": {
                "enabled": false,
                "path": "",
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
            },
        },
    },

    "test_workers": false,
};
