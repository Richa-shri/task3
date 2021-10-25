import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button, Container } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import moment from "moment";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  btn: {
    margin: "0px 5px",
  },
});

export default function Home() {
  const classes = useStyles();

  const todaydate = moment().format("DD/MM/YYYY");

  const [showDate, setShowDate] = useState(todaydate);
  const [showWeek, setShowWeek] = useState([]);

  useEffect(() => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push({ date: moment().add(i, "d").format("DD/MM/YYYY") });
    }
    return setShowWeek(days);
  }, [showDate]);

  const handleNext = () => {
    const nextWeek = moment().add(7, "d").format("DD/MM/YYYY");
    setShowDate(nextWeek);
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push({ date: moment().add(i, "d").format("DD/MM/YYYY") });
    }
    return setShowWeek(days);
  };

  const handlePrev = () => {
    const prevWeek = moment().subtract(7, "d").format("DD/MM/YYYY");
    setShowDate(prevWeek);
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push({ date: moment().subtract(i, "d").format("DD/MM/YYYY") });
    }
    return setShowWeek(days);
  };

  console.log("data", showWeek.map(i => i.date), );

  return (
    <div>
      <br />

      <Container>
        <Box
          component={Paper}
          display="flex"
          p={2}
          mb={3}
          justifyContent="space-between"
        >
          <Button onClick={() => handlePrev()}>Previous</Button>
          {showDate}
          <Button onClick={() => handleNext()}>Next</Button>
        </Box>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {showWeek !== undefined
                ? showWeek.map((item) => {
                  return <StyledTableRow>
                      <StyledTableCell>{item.date}</StyledTableCell>
                      <StyledTableCell>
                      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="8:30"
          labelPlacement="start"
        />
                      </StyledTableCell>
                      <StyledTableCell>
                      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="9:00"
          labelPlacement="start"
        />
                      </StyledTableCell>
                      <StyledTableCell>
                      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="9:30"
          labelPlacement="start"
        />
                      </StyledTableCell>
                      <StyledTableCell>
                      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="10:00"
          labelPlacement="start"
        />
                      </StyledTableCell>
                      <StyledTableCell>
                      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="10:30"
          labelPlacement="start"
        />
                      </StyledTableCell>
                      <StyledTableCell>
                      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="11:00"
          labelPlacement="start"
        />
                      </StyledTableCell>
                      <StyledTableCell>
                      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="11:30"
          labelPlacement="start"
        />
                      </StyledTableCell>
                      <StyledTableCell>
                      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="12:00"
          labelPlacement="start"
        />
                      </StyledTableCell>
                    
                    </StyledTableRow>;
                  })
                : "nodata"}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
