import { useState } from 'react';

export default function useUpdate() {
  const [update, setUpdate] = useState(false);

  const alternateUpdate = () => setUpdate(!update);
  console.log(update)

  return { update, alternateUpdate };
}