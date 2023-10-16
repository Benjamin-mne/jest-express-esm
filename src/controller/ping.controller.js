export const sendPong = async (_, res) => {
  try {
    res.json({ msg: 'pong' })
  } catch (error) {
    console.log(error)
  }
}
