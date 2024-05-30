import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import './App.css';

function App() {
  return (
    <div>
      <h1>天気を表示する小さいアプリの実装</h1>
        <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-simple-select-label">都市選択</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Prefecture">
              <MenuItem value={"SAPPORO"}>札幌</MenuItem>
              <MenuItem value={"SENDAI"}>仙台</MenuItem>
              <MenuItem value={"TOKYO"}>東京</MenuItem>
              <MenuItem value={"YOKOHAMA"}>横浜</MenuItem>
              <MenuItem value={"OSAKA"}>大阪</MenuItem>
              <MenuItem value={"KYOTO"}>京都</MenuItem>
              <MenuItem value={"KOBE"}>神戸</MenuItem>
              <MenuItem value={"NAGOYA"}>名古屋</MenuItem>
              <MenuItem value={"HIROSHIMA"}>広島</MenuItem>
              <MenuItem value={"HUKUOKA"}>福岡</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <h2>天気情報</h2>
          <Paper sx={{
            width: 1500,
          }}>
            <Table
              stickyHeader
              style={{
                tableLayout: "fixed",
              }}>
              <TableHead>
                <TableRow>
                  <TableCell>都市名</TableCell>
                  <TableCell>気温（摂氏）</TableCell>
                  <TableCell>天気</TableCell>
                  <TableCell>風速</TableCell>
                  <TableCell>風向き</TableCell>
                  <TableCell>湿度</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </Paper>
        </div>
    </div>
  );
}
export default App;
