import { exec } from 'child_process'
let args = process.argv
args.splice(0, 2)
let str = args.join(' ')

exec('git add .', cbAdd)
//
function cbAdd (err, sdout, sdin) {
  if (err) {
    console.log(err)
    return
  }
  // it worked
  console.log('Git add completed')
  exec(`git commit -m "${str}"`, cbCommit)
}

function cbCommit (err, sdout, sdin) {
  if (err) {
    console.log(err)
    return
  }
  // Worked
  console.log('Git commit completed')
  exec(`git push origin main`, cbPush)
}

function cbPush (err, sdout, sdin) {
  if (err) {
    console.log(err)
    return
  }
  // Worked again
  console.log('Git push completed')
}
