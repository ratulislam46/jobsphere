export const myApplicationPromise = email => {
    return fetch(`https://jobsphere-server-indol.vercel.app/applications?email=${email}`).then(res => res.json())
}