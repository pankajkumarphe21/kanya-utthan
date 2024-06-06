/** @format */

import React from "react";
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

const RequestCard = () => {
  return (
    <Box sx={{ width: "400px",margin:'20px','&:hover':{boxShadow:'0px 6px 25px rgba(0, 0, 0, 0.2)'} }}>
      <Card>
        <CardContent>
          <Container sx={{ display: "flex" }}>
            <Card sx={{ width: "180px", height: "160px"}}>
              <img className="w-[180px] h-[160px]" src="/assets/images/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg" alt="" />
            </Card>
            <Card sx={{ width: "180px", height: "160px"}}>
              <img className="w-[180px] h-[160px]" src="/assets/images/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg" alt="" />
            </Card>
          </Container>
          <Container sx={{display:'flex',gap:'15px'}}>
          <Typography variant="h5">Vishali kumari</Typography>
          <Typography variant="h5">Vishal kumar</Typography>
          </Container>
          <Divider />
          <Container sx={{marginTop:'20px'}}>
            <Container sx={{display:'flex' ,gap:'20px',justifyContent:'start',alignItems:'center'}}>
            <Avatar></Avatar>
            <Typography>Father's Name</Typography>
            </Container>
          </Container>
          <Container>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Date" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Venue" />
                </ListItemButton>
              </ListItem>
            </List>
          </Container>
        </CardContent>
        <CardActions sx={{display:'flex', justifyContent:'end', marginRight:'20px'}}>
            <Button variant="contained" color="error">Donate</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default RequestCard;
