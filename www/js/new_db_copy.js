function dbcopy(dbName)
{
        //Database filename to be copied is demo.db

        //location = 0, will copy the db to default SQLite Database Directory
        window.plugins.sqlDB.copy(dbName, 0, copysuccess, copyerror);

        //or

        //location = 1, will copy the database to /Library folder
        //window.plugins.sqlDB.copy(dbName, 1, copysuccess,copyerror);

        //or

        //location = 2, will copy the database to /Library/LocalDatabase folder (Disable iCloud Backup)
        //window.plugins.sqlDB.copy(dbName, 2, copysuccess,copyerror);

}

function removeDB(dbName)
{
      var location = 1;
      window.plugins.sqlDB.remove(dbName, location, rmsuccess,rmerror);  
}

function copysuccess(dbName)
{
        //open db and run your queries
         db = window.sqlitePlugin.openDatabase({name: dbName});
}

function copyerror(e)
{
        //db already exists or problem in copying the db file. Check the Log.
        console.log("Error Code = "+JSON.stringify(e));
        //e.code = 516 => if db exists
}
