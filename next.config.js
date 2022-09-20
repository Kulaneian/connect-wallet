/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => { const experiments = config.experiments || {}; config.experiments = { ...experiments, syncWebAssembly: true, }; return config },
}
