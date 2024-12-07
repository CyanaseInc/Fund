import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
// @mui
import { Card, Stack, Typography, Divider } from '@mui/material';
// utils
import { fNumber } from '../../../../utils/formatNumber';

import UserData from '../../../../_mock/data';

// ----------------------------------------------------------------------

ProfileFollowInfo.propTypes = {
  profile: PropTypes.shape({
    follower: PropTypes.number,
    following: PropTypes.number,
  }),
};

export default function ProfileFollowInfo() {
  
  const [net, setNet] = useState(0);
  const [dep, setDep] = useState(0);
  const { data: userData } = UserData();
  
  const userDataInfo = userData;
  
  
  useEffect(() => {
    if (userDataInfo) {
      // Sum all deposit amounts from the dep array
      const sumOfDeposits = userDataInfo.dep.reduce((total, item) => total + parseInt(item.total_amount, 10), 0);

      setNet(userDataInfo.net);
      setDep(sumOfDeposits);
    }
  }, [userDataInfo]);
  return (
    <Card sx={{ py: 3 }}>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
        <Stack width={1} textAlign="center">
          <Typography variant="h4">{fNumber(dep)}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Total Deposit
          </Typography>
        </Stack>

        <Stack width={1} textAlign="center">
          <Typography variant="h4">{fNumber(net)}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Networth 
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}