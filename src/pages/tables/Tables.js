import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";
import mocke from "../dashboard/mocke";
import mockedest from "../dashboard/mockedest";

const datatableData = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export default function Tables() {
  return (
    
    
    <>
      <PageTitle title="Blacklist" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Listando..."
            data={datatableData}
            columns={["act", "data", "id"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="" upperTitle noBodyPadding>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
      <>
      <PageTitle title="Credentials" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Listando..."
            data={datatableData}
            columns={["id", "action", "canal", "broker", "packagegroup","national", "credential", "data", "codigo"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="" upperTitle noBodyPadding>
            <Table data={mocke.table} />
          </Widget>
        </Grid>
      </Grid>
  
      <PageTitle title="Destination" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Listando..."
            data={datatableData}
            columns={["PAIS",	"ESTADO",	"CIDADE",	"COMPANHIA",	"CODIGO CIA",	"BROKER",	"CODIGO BROKER PAIS",	"CODIGO BROKER ESTADO",	"CODIGO BROKER CIDADE"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="" upperTitle noBodyPadding>
            <Table data={mockedest.table} />
          </Widget>
        </Grid>
      </Grid>
      </>
      </>
  );
}
